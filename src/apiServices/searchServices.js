import * as request from '~/untils/request';


export const search = async (q, type='less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type
            },
        });
        return res.data;
    } catch(error) {
        console.log(error)
    }
}
