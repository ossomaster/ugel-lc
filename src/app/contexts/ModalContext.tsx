"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ModalContextType {
	showVideoModal: boolean
	showMapModal: boolean
	openVideoModal: () => void
	closeVideoModal: () => void
	openMapModal: () => void
	closeMapModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
	const [showVideoModal, setShowVideoModal] = useState(false)
	const [showMapModal, setShowMapModal] = useState(false)

	return (
		<ModalContext.Provider
			value={{
				showVideoModal,
				showMapModal,
				openVideoModal: () => setShowVideoModal(true),
				closeVideoModal: () => setShowVideoModal(false),
				openMapModal: () => setShowMapModal(true),
				closeMapModal: () => setShowMapModal(false),
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export function useModal() {
	const context = useContext(ModalContext)
	if (context === undefined) {
		throw new Error("useModal must be used within a ModalProvider")
	}
	return context
}
