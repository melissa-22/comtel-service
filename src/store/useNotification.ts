import {create} from "zustand";
interface UseNotificationProps {
    visibility: boolean
    status: number
    open: (status: number) => void
}

export const useNotification = create<UseNotificationProps>()((set) => ({
    visibility: false,
    status: 0,
    open: (status) => {
        set({
            visibility: true,
            status: status
        })
        setTimeout(() => set({
            visibility: false,
            status: 0
        }), 6000)
    },
}))