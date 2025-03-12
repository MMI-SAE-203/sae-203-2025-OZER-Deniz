import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allFilmsSorted() {
    return await pb.collection('films').getFullList({
        sort: 'dateProjection'
    });
}

export async function allActivitiesSorted() {
    return await pb.collection('activites').getFullList({
        sort: 'dateProjection'
    });
}

export async function allParticipantsSorted() {
    return await pb.collection('participants').getFullList({
        sort: 'nom'
    });
}

export async function oneFilm(id) {
    return await pb.collection('films').getOne(id);
}

export async function oneActivity(id) {
    return await pb.collection('activites').getOne(id);
}

export async function oneParticipant(id) {
    return await pb.collection('participants').getOne(id);
}

export async function allActivitiesByAnimatorId(animatorId) {
    return await pb.collection('activites').getFullList({
        filter: `animateur = '${animatorId}'`
    });
}

export async function allActivitiesByAnimatorName(animatorName) {
    const animators = await pb.collection('animateurs').getFullList({
        filter: `nom = '${animatorName}'`
    });
    if (animators.length === 0) return [];
    return await pb.collection('activites').getFullList({
        filter: `animateur = '${animators[0].id}'`
    });
}

export async function addOrUpdateItem(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}
