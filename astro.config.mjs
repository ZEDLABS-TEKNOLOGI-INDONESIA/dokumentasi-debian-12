// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
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
        {
          label: "NTP / SSH Server", // Tema Pembahasan
          collapsed: true,
          items: [
            {
              label: "NTP Server", // Kategori
              collapsed: true,
              items: [
                {
                  label: "Configure NTP Server (NTPsec)",
                  slug: "ntp-ssh-server/configure-ntp-server-ntpsec",
                },
                {
                  label: "Configure NTP Server (Chrony)",
                  slug: "ntp-ssh-server/configure-ntp-server-chrony",
                },
                {
                  label: "Configure NTP Client",
                  slug: "ntp-ssh-server/configure-ntp-client",
                },
              ],
            },
            {
              label: "SSH Server", // Kategori
              collapsed: true,
              items: [
                {
                  label: "Password Authentication",
                  slug: "ntp-ssh-server/password-authentication",
                },
                {
                  label: "SSH File Transfer (Debian)",
                  slug: "ntp-ssh-server/ssh-file-transfer-debian",
                },
                {
                  label: "SSH File Transfer (Windows)",
                  slug: "ntp-ssh-server/ssh-file-transfer-windows",
                },
                {
                  label: "SSH Keys Pair Authentication",
                  slug: "ntp-ssh-server/ssh-keys-pair-authentication",
                },
                {
                  label: "SFTP Only + Chroot",
                  slug: "ntp-ssh-server/sftp-only-chroot",
                },
                {
                  label: "Use SSH-Agent",
                  slug: "ntp-ssh-server/use-ssh-agent",
                },
                {
                  label: "Use SSH-Pass",
                  slug: "ntp-ssh-server/use-ssh-pass",
                },
                {
                  label: "Use SSH-FS",
                  slug: "ntp-ssh-server/use-ssh-fs",
                },
                {
                  label: "SSH Port Forwarding",
                  slug: "ntp-ssh-server/ssh-port-forwarding",
                },
                {
                  label: "Use Parallel SSH",
                  slug: "ntp-ssh-server/use-parallel-ssh",
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
