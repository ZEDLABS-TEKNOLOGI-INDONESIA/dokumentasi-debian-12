// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Debian 12",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/zulfikriyahya/debian-12",
        },
      ],
      sidebar: [
        {
          label: "Install Debian", // Tema Pembahasan
          collapsed: true,
          items: [
            {
              label: "Install", // Kategori
              collapsed: true,
              items: [
                {
                  label: "Get Debian 12",
                  slug: "install-debian/get-debian-12",
                },
                {
                  label: "Install Debian 12",
                  slug: "install-debian/install-debian-12",
                },
              ],
            },
            {
              label: "Initial Settings", // Kategori
              collapsed: true,
              items: [
                {
                  label: "Add User Accounts",
                  slug: "install-debian/add-user-accounts",
                },
                {
                  label: "Set Command Alias",
                  slug: "install-debian/set-command-alias",
                },
                {
                  label: "Network Settings",
                  slug: "install-debian/network-settings",
                },
                {
                  label: "Configure Services",
                  slug: "install-debian/configure-services",
                },
                {
                  label: "Configure APT Sources",
                  slug: "install-debian/configure-apt-sources",
                },
                {
                  label: "Update System",
                  slug: "install-debian/update-system",
                },
                {
                  label: "Vim Settings",
                  slug: "install-debian/vim-settings",
                },
                {
                  label: "Configure Sudo",
                  slug: "install-debian/configure-sudo",
                },
              ],
            },
          ],
        },
        // {
        //   label: "Instalasi",
        //   autogenerate: { directory: "install-debian" },
        // },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
