
interface ProfileDetFieldProps {
    keys: string;
    value: string | number | boolean;
    isGroup?: boolean;
    member?: string[];
}

const ProfileDetField = ({ keys, value, isGroup, member }: ProfileDetFieldProps) => {
    return (
        <>
        <div className="p-2 bg-gray-600 border border-gray-300 rounded-md w-full flex items-center">
            <span className="font-bold">{keys}</span> :- {value}
        </div>
        {
            isGroup && member && member.length > 0 ? (
                <div className="p-2 bg-gray-600 border border-gray-300 rounded-md w-full flex items-center">
                    <span className="font-bold">Members</span> :- {member.map((m, index) => (
                        <span key={index} className="ml-2">{m}</span>
                    ))}
                </div>
            ) : null
        }
        
        </>
    )
}

export default ProfileDetField