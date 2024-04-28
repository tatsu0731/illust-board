import EditProfileButton from '../atoms/EditProfileButton';
import QRbutton from '../atoms/QRbutton';


export default function PostActionSection() {
    return(
        <section className="flex justify-center mb-4">
            <div className='w-80 flex justify-center gap-4'>
                <EditProfileButton />
                <QRbutton />
            </div>
        </section>
    )
};