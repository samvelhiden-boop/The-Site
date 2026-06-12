async function createHistoryStore({ provider = "memory", limit = 100, databaseUrl, redisUrl, logger }) {
  if (provider === "memory") {
    const store = new Map();
    
    return {
      async getRecent(room) {
        return store.get(room) || [];
      },
      
      async append(room, message) {
        const history = store.get(room) || [];
        history.push(message);
        if (history.length > limit) {
          history.shift();
        }
        store.set(room, history);
      }
    };
  }
  
  // Add other providers (redis, postgres) as needed
  throw new Error(`Unsupported history provider: ${provider}`);
}

module.exports = { createHistoryStore };