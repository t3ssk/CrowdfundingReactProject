export const showSupportModal = (): {type: string} => {
    return {type: 'SUPPORT_MODAL/ON'}
};

export const hideSupportModal = (): {type: string} => {
    return  {type: 'SUPPORT_MODAL/OFF'}
};