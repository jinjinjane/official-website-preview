const cachedScripts = new Map();

/**
 * Dynamically load an external script and cache its promise.
 * Helpful for third-party auth SDKs that must be loaded once.
 *
 * @param {string} src URL of the script to load.
 * @param {{ id?: string, async?: boolean, defer?: boolean, attributes?: Record<string, string> }} [options]
 * @returns {Promise<void>}
 */
export const loadScript = (src, options = {}) => {
  if (!src) {
    return Promise.reject(new Error("loadScript: src is required"));
  }

  if (cachedScripts.has(src)) {
    return cachedScripts.get(src);
  }

  const { id, async = true, defer = true, attributes = {} } = options;

  const promise = new Promise((resolve, reject) => {
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    script.defer = defer;

    if (id) {
      script.id = id;
    }

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load external script: ${src}`));

    document.body.appendChild(script);
  });

  cachedScripts.set(src, promise);
  return promise;
};
