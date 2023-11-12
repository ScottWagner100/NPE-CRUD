import '../resources/EditGamePhoto.css';

export default function EditGamePhoto(props) {

    return (
        <div className='game_photo_cnt'>
            <p id='edit_game_photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='edit_game_photo' />
            <button className='edit_button'>EDIT</button>
            <button className='delete_button'>DELETE</button>
        </div>
    );
}