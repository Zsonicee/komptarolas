// netlify/functions/saveConfig.js
exports.handler = async (event) => {
    const config = JSON.parse(event.body);
    // Mentsd el a config-ot egy adatbázisba (pl. Firebase)
    const configId = generateUniqueId();
    await saveToDatabase(configId, config);
    return {
        statusCode: 200,
        body: JSON.stringify({ configId })
    };
};