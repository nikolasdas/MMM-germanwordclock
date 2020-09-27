# Module: German Word Clock
This Magic Mirror module displays a Word Clock written in german.

## Installing

### Step 1 - Install the module
```bash
cd ~/MagicMirror/modules
git clone https://github.com/nikolasdas/MMM-germanwordclock
cd MMM-germanwordclock
npm install
```

### Step 2 - Add module to `~MagicMirror/config/config.js`
Add this configuration into `config.js` file's
```javascript
{
	module: 'MMM-germanwordclock',
	position: 'middle_center',
	config: {
		// see below for config options
	}
}
```

## Updating
Go to the module’s folder inside MagicMirror modules folder and pull the latest version from GitHub and install:
```bash
git pull
npm install
```

## Configuring
Here is the configurable part of the module

| Option               | Description
|--------------------- |-----------
| `updateInterval` | Update Interval<br>**Type:** `number` in ms<br>**Default value:** `1000`
| `bold`           | Bold Letters<br>**Type:** `boolean`<br>**Default value:** `true`
| `italic`         | Italic Letters<br>**Type:** `boolean`<br>**Default value:** `false`
| `fontFamily`     | Font<br>**Type:** `string`<br>**Default value:** `Courier`
| `fontSize`       | Font Size<br>**Type:** `length` \| `percentage`<br>**Default value:** `.5rem`
| `letterSpacing`  | Letter Spacing<br>**Type:** `length`<br>**Default value:** `1rem`
| `lineHeight`     | Line Height<br>**Type:** `number` \| `length` \| `percentage`<br>**Default value:** `1rem`
| `color`          | Color of Letters<br>**Type:** `color`<br>**Default value:** `rgba(255,255,255,0.2)`
| `selectedColor`  | Color of active Letters<br>**Type:** `color`<br>**Default value:** `rgba(255,255,255,1)`
