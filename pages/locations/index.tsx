import { LocationType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query"

const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET'
    }).then((res) => res.json())
}

export const getStaticProps = async () => {

    const queryClient = new QueryClient()

    await queryClient.fetchQuery(['locations'], getLocations)
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

const Locations = () => {
    const { data: locations } = useQuery<ResponseType<LocationType>>(['locations'], getLocations)

    if (!locations) return null

    const locationsList = locations.results.map(location => (
        <Card key={location.id} name={location.name} />
    ))

    return (
        <PageWrapper>
            <Header />
            {locationsList}
        </PageWrapper>
    )
}

export default Locations