import ProfileDetField from "./ProfileDetField"

const ProfileDetails = () => {
  return (
    <div className="flex flex-col gap-2 items-center p-4">
        <h1 className="text-2xl font-bold">Profile Details</h1>
        <ProfileDetField keys="Name" value="Saif khan" />
        <ProfileDetField keys="Email" value="saifkhan@luxuria.com" />
        <ProfileDetField keys="Phone" value="1234567890" />
        <ProfileDetField keys="Country" value="India" />
        <ProfileDetField keys="Subcription" value="Basic level" />
        <ProfileDetField keys="Group" value="D - 17" member={["Saif khan", 'Faiz khan', 'Vais khan']} isGroup={true} />


    </div>
  )
}

export default ProfileDetails