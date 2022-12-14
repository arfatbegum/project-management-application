import React, { useState } from 'react';
import { hexToRGB } from '../utils/hexToRGB';
import moment from 'moment';
import AddMemberModal from './AddMemberModal';

const Team = ({ team }) => {
    const [opened, setOpened] = useState(false);

    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };
    const { name, title, createdAt, color, members, id } = team || {};
    return (
        <div>
            <div
                class="bg-slate-800 shadow-lg relative flex flex-col items-start p-4 mt-3 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                draggable="true"
            >
                <button
                    onClick={controlModal}
                    class="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
                >
                    <svg
                        class="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                        />
                    </svg>
                </button>
                <span
                    className='flex items-center capitalize h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full'
                    style={{ backgroundColor: hexToRGB(color, 0.2), color: hexToRGB(color) }}>
                    {name}
                </span>
                <div className='members mt-2 flex items-center flex-wrap'>
                    {members.map((member, index) => {
                        return (
                            <div
                                className='member uppercase w-8 h-8 rounded-full text-center leading-8 bg-blue-700 mr-1'
                                key={index}>
                                {member?.split('@')[0].slice(0, 1)}
                            </div>
                        );
                    })}
                </div>
                <h4 class="mt-3 text-sm font-medium">
                    {title}
                </h4>
                <div
                    class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                    <div class="flex items-center">
                        <svg
                            class="w-4 h-4 text-blue-700 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="ml-1 leading-none">{moment(createdAt).format('ll')}</span>
                    </div>
                </div>
            </div>
            <AddMemberModal open={opened} control={controlModal} members={members} teamId={id} />
        </div>
    );
};

export default Team;