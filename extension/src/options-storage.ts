import OptionsSync from "webext-options-sync";

export default new OptionsSync({
	defaults: {
		enableIndexing: true,
		enableScraping: false,
		enableML: false,
		endpoint: "http://localhost:4700"
	},
	migrations: [OptionsSync.migrations.removeUnused],
	logging: true
});
