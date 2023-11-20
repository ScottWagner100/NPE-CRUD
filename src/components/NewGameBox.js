import '../resources/NewGameBox.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/* Contains the image generation form on
/  the authenticated home page. I did not
/  add functionality to the form as I'm not
/  sure what the ultimate vision is here.
*/
export default function NewGameBox() {

    const navigate = useNavigate();
    const gotoGen = () => navigate('/gen');

    const [gameInput, setGameInput] = useState({
        title: '',
        url: '',
    });

    const handleTitleChange = (event) => {
        setGameInput((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    }

    const handleUrlChange = (event) => {
        setGameInput((prevState) => {
            return { ...prevState, url: event.target.value };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setGameInput({
            title: '',
            url: ''
        });
    }

    return (
        <div className="new_game_box">
            <form onSubmit={handleSubmit}>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image Title:</label>
                    <input
                        className='link_input'
                        placeholder='...'
                        type='text'
                        name='title'
                        value={gameInput.title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image URL:</label>
                    <input 
                        className='link_input'
                        placeholder='...'
                        type='text'
                        name='url'
                        value={gameInput.url}
                        onChange={handleUrlChange}
                    />
                </div>
                <button id='add_game_button' type='submit'>ADD NEW GAME</button>
            </form>
                <div className='add_game_button_cnt'>
                <button id='goto_gen_button' onClick={gotoGen}>GO TO GENERATE LINK</button>
            </div>
        </div>
    );
}