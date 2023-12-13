module.exports = {
  packagerConfig: {
    asar: true,
    ignore: [
      ".vscode/*",
      "src/*",
      ".gitignore",
      ".git/*",
      "forge.config.js",
      "package-lock.json",
      "README.md",
      "yarn.lock",
      ".eslintrc",
      "tsconfig.json",
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
