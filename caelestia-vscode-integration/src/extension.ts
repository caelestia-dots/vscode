import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { homedir } from "os";
import { commands, ConfigurationTarget, RelativePattern, workspace, type ExtensionContext } from "vscode";

const update = async () => {
    if (!existsSync(homedir() + "/.cache/caelestia/scheme/current.txt")) {
        console.log("No current scheme.");
        return;
    }

    const scheme = (await readFile(homedir() + "/.cache/caelestia/scheme/current.txt", "utf-8")).trim();

    if (!existsSync(`${homedir()}/.config/caelestia/vscode/schemes/${scheme}.json`)) {
        console.log(`Invalid scheme: ${scheme}`);
        return;
    }

    const colours = JSON.parse(await readFile(`${homedir()}/.config/caelestia/vscode/schemes/${scheme}.json`, "utf-8"));
    const config = workspace.getConfiguration();
    await config.update(
        "catppuccin.colorOverrides",
        { ...config.get("catppuccin.colorOverrides"), mocha: colours },
        ConfigurationTarget.Global
    );
    commands.executeCommand("workbench.action.reloadWindow");

    console.log(`Updated scheme to ${scheme}.`);
};

export const activate = (context: ExtensionContext) => {
    const watcher = workspace.createFileSystemWatcher(
        new RelativePattern(homedir() + "/.cache/caelestia/scheme", "current.txt")
    );
    context.subscriptions.push(watcher, watcher.onDidCreate(update), watcher.onDidChange(update));
    console.log(`Watching for changes to ${homedir()}/.cache/caelestia/scheme/current.txt`);
};
