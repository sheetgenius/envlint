# EnvLint

A free browser-based .env file validator and linter.

## What it does

EnvLint parses a `.env` file and reports:
- Missing values (keys with no value after `=`)
- Duplicate keys
- Invalid line format (no `=` sign, invalid key names)
- Keys that look like real secrets (sensitive key name patterns + non-placeholder value)
- Placeholder values that should be replaced before production use

It also generates a `.env.example` file — a safe-to-commit template with all sensitive values replaced by descriptive placeholders.

## Usage

**Human surface:** https://envlint.com — paste a `.env` file in the browser, get instant results. Zero data transmission.

**Input:** Raw .env file content as a string.

**Output:**
- List of issues (level, key, message)
- Parsed key-value pairs
- Generated `.env.example` content

## Key properties

- Runs entirely in the browser — no server, no logging, no data transmission
- Free, no signup required
- Handles quoted values (single and double), multiline values, inline comments, `export KEY=VAL` syntax

## Pricing

Free. No paid tier yet.

## Support

https://bitterdesk.com/s/envlint/
