import CommunityCard from '../CommunityCard/CommunityCard'
import communitiesData from '../../mockData/communitiesData'
import './Communities.scss'

const Communities = () => {

  const commmunityList = communitiesData.map(community => {
    const { id, communityImage, communityName } = community
    return (
      <CommunityCard
        image={communityImage}
        name={communityName}
        key={id}
      />
    )
  })


  return (
    <section className='communities'>
      <h2 className='communities__title'>Communities</h2>
      { commmunityList }
    </section>
  )
}

export default Communities