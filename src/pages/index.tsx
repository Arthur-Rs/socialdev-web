import Header from '@app/components/Header'
import PostContainer from '@app/components/PostContainer'
import RecommendedContainer from '@app/components/RecommendedContainer'
import * as S from '@app/styles/pages'
import { platform } from 'os'

const Index = () => {
  return (
    <>
      <Header/>
      <S.PageContainer>
        <PostContainer />

        <RecommendedContainer />
  
      </S.PageContainer>
    </>
  )
}

export default Index