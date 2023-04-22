export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","title.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.60831283.js","imports":["_app/immutable/entry/start.60831283.js","_app/immutable/chunks/index.49a1fc66.js","_app/immutable/chunks/singletons.b94902d0.js","_app/immutable/chunks/index.50efabe1.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5d2c3ebf.js","imports":["_app/immutable/entry/app.5d2c3ebf.js","_app/immutable/chunks/index.49a1fc66.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
