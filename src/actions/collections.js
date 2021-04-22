export const createCollection = collection => {
    let collectionId = uuid();
    return {
        type: 'CREATE_COLLECTION',
        collection: Object.assign({}, collection, {id: userId})
    }
}

