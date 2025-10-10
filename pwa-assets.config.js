import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";
import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");
const imageExtensions = [".svg", ".png", ".jpg", ".jpeg", ".ico", ".webp"];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(fullPath));
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      results.push(fullPath);
    }
  });

  return results;
}

const images = getAllImages(publicDir).map((file) =>
  path.relative(process.cwd(), file)
);

export default defineConfig({
  preset,
  images,
});
