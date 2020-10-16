import * as S from './styles';

import SendIcon from '@app/assets/icons/send.svg'
import AddPhotoIcon from '@app/assets/icons/add-photo.svg'
import { ChangeEvent, useCallback, useRef, useState } from 'react';


const CreatePost = () => {

  const InputFileRef = useRef<HTMLInputElement>(null)

  const [photo, setPhoto] = useState<File>()

  const handleSelectPhoto = useCallback(async ()=>{
    InputFileRef.current.click()
  },[])

  const handleSendPost = useCallback(()=>{
    console.log('sendPost')
  },[])

  const SendPhoto = useCallback((event:ChangeEvent<HTMLInputElement>)=>{
    const file = event.target.files[0]
    setPhoto(file)
  },[])

  return (
    <S.Container>
      <header>
        <span>Nova Publicação</span>
      </header>
      <main>
        <S.TextArea placeholder="Digite seu post aqui..." rows={6}></S.TextArea>
      </main>
      <footer>
        <input onChange={SendPhoto} ref={InputFileRef} type="file"/>
        <AddPhotoIcon onClick={handleSelectPhoto}/>
        <SendIcon onClick={handleSendPost}/>
      </footer>
    </S.Container>
  );
}

export default CreatePost;