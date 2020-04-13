# Commit Style

## Types

    - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    - ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    - docs: Documentation only changes
    - feat: A new feature
    - fix: A bug fix
    - perf: A code change that improves performance
    - refactor: A code change that neither fixes a bug nor adds a feature
    - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - test: Adding missing tests or correcting existing tests

## Subject

    - The subject contains a succinct description of the change.
    - Use the imperative, present tense: "change" not "changed" nor "changes".
    - Don't capitalize the first letter
    - No dot (.) at the end.

## Examples

    - `docs(changelog): update changelog to beta.5`
    - `fix(release): need to depend on latest rxjs and zone.js`
