import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeValueAsync(value, key) {
    try {
        console.log("LOG:: OKOK Async Storage " + JSON.stringify(value));
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log("e", e)
    }
}

export async function getStoredValAsync(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("e", e)
        return null
    }
}
