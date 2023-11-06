function parseCommandLineArgs(args) {
    const keyValuePairs = {};

    for (let i = 2; i < args.length; i++) {
        const arg = args[i]?.trim()

        // Check if the argument starts with "--" and contains "="
        if (arg.startsWith("--") && arg.includes("=")) {
            const [key, value] = arg.slice(2).split('=');
            keyValuePairs[key] = value;
        }
        else if (arg.startsWith("-") && arg.includes("=")) {
            const [key, value] = arg.slice(1).split('=');
            keyValuePairs[key] = value;
        }
        else if (!arg.includes("=")){
            args.slice(2).forEach(arg => keyValuePairs[arg] = null);
        }
    }

    return keyValuePairs;
}

module.exports = parseCommandLineArgs
