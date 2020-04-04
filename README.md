# Academind-TypeScript

How to enter watch mode ```tsc app.ts --watch```

upon starting create the config by running ```tsc --init```

if you want to compile everything after doing this, run ```tsc```

if you want to exclude files, add ```"exclude": ["file.ts"]``` to the tsconfig.json file. Include allows you to do the opposite.
Choose whichever approach means the less code, remember that if you do not use the exclude keyword, then node modules is excluded
by default, so be mindful when using it.