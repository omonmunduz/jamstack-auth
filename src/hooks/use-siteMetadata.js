import { useStaticQuery, graphql } from 'gatsby';

const useMetadata = () => {
    const data = useStaticQuery(graphql`
        query  {
            site{
                siteMetadata {
                title
                desciption
                }
            }
            }

    `);

    return data.site.siteMetadata
};
export default useMetadata;