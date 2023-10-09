function parseCommandLineArgs(args) {
    const keyValuePairs = {};

    for (let i = 2; i < args.length; i++) {
        const arg = args[i];

        // Check if the argument starts with "--" and contains "="
        if (arg.startsWith("--") && arg.includes("=")) {
            const [key, value] = arg.slice(2).split('=');
            keyValuePairs[key] = value;
        }
    }

    return keyValuePairs;
}

const commandLineArgs = parseCommandLineArgs(process.argv);

console.log(commandLineArgs);
