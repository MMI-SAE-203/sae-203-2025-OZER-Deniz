import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export default pb;

export async function allFilms() {
    return await pb.collection('Film').getFullList({
        fields: 'id,titre_film,affiche_film,diffusion_film,bande_annonce_film'
    });
}

export async function oneFilm(id) {
    return await pb.collection('Film').getOne(id, {
        fields: 'titre_film,duree_film,langue_film,production_film,annee_de_sortie_film,genre_film,affiche_film,bande_annonce_film,relation_film'
    });
}

export async function allActivities() {
    return await pb.collection('Activite').getFullList({
        fields: 'id,titre_activite,type_activite,image_activite,date_activite,lieu_activite'
    });
}

export async function oneActivity(id) {
    return await pb.collection('Activite').getOne(id, {
        fields: 'titre_activite,type_activite,image_activite,date_activite,lieu_activite,description_activite,relation_activite'
    });
}

export async function allInvites() {
    return await pb.collection('Invite').getFullList({
        fields: 'id,nom_invite,prenom_invite,role_invite,photo_invite'
    });
}

export async function oneInvite(id) {
    return await pb.collection('Invite').getOne(id, {
        fields: 'nom_invite,prenom_invite,role_invite,biographie_invite,photo_invite,relation_invite'
    });
}

export async function allFilmsSorted() {
    return await pb.collection('Film').getFullList({
        sort: 'dateProjection'
    });
}

export async function allActivitiesSorted() {
    return await pb.collection('Activite').getFullList({
        sort: 'dateProjection'
    });
}

export async function allParticipantsSorted() {
    return await pb.collection('Invite').getFullList({
        sort: 'nom'
    });
}

export async function oneFilm(id) {
    return await pb.collection('Film').getOne(id);
}

export async function oneActivity(id) {
    return await pb.collection('Activite').getOne(id);
}

export async function oneParticipant(id) {
    return await pb.collection('Invite').getOne(id);
}

export async function allActivitiesByAnimatorId(animatorId) {
    return await pb.collection('Activite').getFullList({
        filter: `Invite = '${animatorId}'`
    });
}

export async function allActivitiesByAnimatorName(animatorName) {
    const animators = await pb.collection('Invite').getFullList({
        filter: `nom = '${animatorName}'`
    });
    if (animators.length === 0) return [];
    return await pb.collection('Activite').getFullList({
        filter: `Invite = '${animators[0].id}'`
    });
}

export async function addOrUpdateItem(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}
