import Client from '../clients/AxiosClient';
const resource = '/household';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
};