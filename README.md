# Brevity Plugin Starter

This template provides a minimal setup to get a plugin added to Brevity. You can add schemas, blocks, and server actions.

Publish via CLI or use `pnpm run publish-plugin`.

## Blocks and actions

Blocks and actions let you create additional functionality for the editor. 

**Blocks** let you create new blocks you can add to the canvas. You can create blocks in `src/blocks`.

Blocks require the following information in `plugin-config.json`:
- `name` - User-facing name (string)
- `entrypoint` - Path to component file (string, relative URL path)
- `acceptsChildren` - If you can nest block elements in the editor (boolean)
- `category` - Type of block element to use (string)
- `props` - List of prop objects (array of objects)
- `events` - Array
- `defaultStyles` - An object with CSS properties written in JSON format
- `sources` - Array
- `actions` - Array

**Actions** let you handle backend logic on the server. You can create actions in `src/actions`.

Please note that these run on Cloudflare Workers, which use a runtime that is built on the V8 JavaScript and WebAssembly engine but is not Node. Some Node-specific features may not be supported.

Actions require the following information in `plugin-config.json`:
- `name` - Label (string, can only use alphanumeric characters, and underscore and dashes)
- `description` - String to describe the plugin
- `entrypoint` - Path to component file
- `props` - Array of prop objects
- `outputType` - Object that lists kind

## Schemas

You can add custom data types to your plugin in the `schemas` field in `src/plugin-config.json`. These data types are available to the user throughout the editor.

Each schema requires:
- `id` - Unique ID
- `type` - Data type
- `properties` - Object of properties (with associated types)
- `required` - Array of required properties

## Plugin settings

You can let the user change plugin settings by adding them to "publicProps" and "privateProps" fields in `src/plugin-config.json`. Both sets of props are passed to actions in a single `env` object.

**`publicProps`** are client settings, and should only include data that the end user can view.
**`privateProps`** are server settings, and can include sensitive data like private keys.

Props require this data:
- `label` - Label for the end user (string)
- `name` - Key passed in the `env` property (string, alphanumeric with underscore and dash)
- `type` - Data type to expect (object, including `kind`)
- `default` - Value to display if data is null (string, not that this is not passed to the action unless edited by the user)
- `placeholder` - What to display before a value is added (string)
- `help` - Tooltip explaining what the data is for (string)

Please note that lists of data are not supported as props.
