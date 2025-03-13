import {
    allFilms,
    oneFilm,
    allActivities,
    oneActivity,
    allInvites,
    oneInvite,
    allFilmsSorted,
    allActivitiesSorted,
    allParticipantsSorted,
    oneParticipant,
    allActivitiesByAnimatorId,
    allActivitiesByAnimatorName,
    addOrUpdateItem
} from './backend.mjs';

async function testBackendFunctions() {
    try {
        const films = await allFilms();
        console.table(films);

        if (films.length > 0) {
            const film = await oneFilm(films[0].id);
            console.table(film);
        }
        const activities = await allActivities();
        console.table(activities);

        if (activities.length > 0) {
            const activity = await oneActivity(activities[0].id);
            console.table(activity);
        }

        const invites = await allInvites();
        console.table(invites);

        if (invites.length > 0) {
            const invite = await oneInvite(invites[0].id);
            console.table(invite);
        }

        const filmsSorted = await allFilmsSorted();
        console.table(filmsSorted); Sorted
        const activitiesSorted = await allActivitiesSorted();
        console.table(activitiesSorted);

        const participantsSorted = await allParticipantsSorted();
        console.table(participantsSorted);

        if (participantsSorted.length > 0) {
            const participant = await oneParticipant(participantsSorted[0].id);
            console.table(participant);
        }

        if (invites.length > 0) {
            const activitiesByAnimatorId = await allActivitiesByAnimatorId(invites[0].id);
            console.table(activitiesByAnimatorId);
        }

        if (invites.length > 0) {
            const activitiesByAnimatorName = await allActivitiesByAnimatorName(invites[0].nom_invite);
            console.table(activitiesByAnimatorName);
        }

        const newItem = await addOrUpdateItem('Film', null, {
            titre_film: 'New Film',
            duree_film: '120 min',
            langue_film: 'French',
            production_film: 'New Production',
            annee_de_sortie_film: '2025',
            genre_film: 'Drama',
            affiche_film: 'new_film.jpg'
        });
        console.table(newItem);

        if (films.length > 0) {
            const updatedItem = await addOrUpdateItem('Film', films[0].id, {
                titre_film: 'Updated Film'
            });
            console.table(updatedItem);
        }
    } catch (e) {
        console.error(e);
    }
}

testBackendFunctions();