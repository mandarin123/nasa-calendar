import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface ModalProps {
    title?: string;
    hdurl?: string;
    url?: string;
    date?: string;
    copyright?: string;
    explanation?: string;
    media_type?: string
}


const DayModal = ({ title, url, hdurl, date, copyright, explanation, media_type }: ModalProps) => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const openModal = () => {
        setIsOpen(!isOpen)
    }


    const renderMedia = () => {
        if (media_type === 'video') {
            return (
                <iframe className='w-full h-full' src={url}>
                </iframe>
            );
        } else {
            return (
                <a href={hdurl} target="_blank" rel="noopener noreferrer">
                    <img src={hdurl} alt="Media" className="object-cover" />
                </a>
            );
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
                Ver mas
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog className="relative z-10" onClose={closeModal}>
                    <div className="fixed inset-0 bg-black/50 ease-in-out duration-300" aria-hidden="true" />
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm text-gray-500">Date: {date}</div>
                                    <div className="mt-2">{renderMedia()}</div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        {media_type === 'video' ? null :
                                            (
                                                <p className="font-roboto text-xs m-3">
                                                    Click on media to see original size
                                                </p>
                                            )
                                        }
                                        {explanation}
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        Author: {copyright}
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="font-roboto inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-black hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default DayModal;