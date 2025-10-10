import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 10 }, // naik ke 10 pengguna
    { duration: "1m", target: 50 }, // naik ke 50 pengguna
    { duration: "2m", target: 100 }, // naik ke 100 pengguna
    { duration: "1m", target: 50 }, // turun ke 50 pengguna
    { duration: "30s", target: 10 }, // turun ke 10 pengguna
    { duration: "10s", target: 0 }, // selesai
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% request harus < 500ms
    http_req_failed: ["rate<0.01"], // <1% request gagal
  },
};

const urls = [
  "http://localhost:4321/",
  "http://localhost:4321/components/asides/",
  "http://localhost:4321/components/badges/",
  "http://localhost:4321/components/card-grids/",
  "http://localhost:4321/components/cards/",
  "http://localhost:4321/components/code/",
  "http://localhost:4321/components/file-tree/",
  "http://localhost:4321/components/icons/",
  "http://localhost:4321/components/link-buttons/",
  "http://localhost:4321/components/link-cards/",
  "http://localhost:4321/components/steps/",
  "http://localhost:4321/components/tabs/",
  "http://localhost:4321/components/using-components/",
  "http://localhost:4321/install-debian/add-user-accounts/",
  "http://localhost:4321/install-debian/configure-apt-sources/",
  "http://localhost:4321/install-debian/configure-services/",
  "http://localhost:4321/install-debian/configure-sudo/",
  "http://localhost:4321/install-debian/get-debian-12/",
  "http://localhost:4321/install-debian/install-debian-12/",
  "http://localhost:4321/install-debian/network-settings/",
  "http://localhost:4321/install-debian/set-command-alias/",
  "http://localhost:4321/install-debian/update-system/",
  "http://localhost:4321/install-debian/vim-settings/",
  "http://localhost:4321/ntp-ssh-server/configure-ntp-client/",
  "http://localhost:4321/ntp-ssh-server/configure-ntp-server-chrony/",
  "http://localhost:4321/ntp-ssh-server/configure-ntp-server-ntpsec/",
  "http://localhost:4321/ntp-ssh-server/password-authentication/",
  "http://localhost:4321/ntp-ssh-server/sftp-only-chroot/",
  "http://localhost:4321/ntp-ssh-server/ssh-file-transfer-debian/",
  "http://localhost:4321/ntp-ssh-server/ssh-file-transfer-windows/",
  "http://localhost:4321/ntp-ssh-server/ssh-keys-pair-authentication/",
  "http://localhost:4321/ntp-ssh-server/ssh-port-forwarding/",
  "http://localhost:4321/ntp-ssh-server/use-parallel-ssh/",
  "http://localhost:4321/ntp-ssh-server/use-ssh-agent/",
  "http://localhost:4321/ntp-ssh-server/use-ssh-fs/",
  "http://localhost:4321/ntp-ssh-server/use-ssh-pass/",
];

export default function () {
  for (const url of urls) {
    const res = http.get(url);
    check(res, {
      "status is 200": (r) => r.status === 200,
      "response time < 500ms": (r) => r.timings.duration < 500,
    });
    sleep(1); // jeda antar request
  }
}
