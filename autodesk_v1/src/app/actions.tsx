'use server'

export const getData = async ( ) => {
    console.log('getting data');
    // fech to your db / cloudinery
    return [
        { id: 1 , title: 'hello world'}
    ]
}
