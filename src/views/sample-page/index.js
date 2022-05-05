// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Consent">
        <Typography variant="h4">
            Welcome to the My Contribution tool!
        </Typography>

        <Typography variant="body2">
            The purpose of this tool is to enable everyone in our organisation to record the deliberate choices they have made and actions they have taken to help safeguard our environment and health.

            Each Contribution has a free text description (in English please!) and one more tags from a taxonomy that relates to the Climate and Health goals. Additional entry fields are optional start and end dates for your contribution. Your current Zuhlke location will also be stored with each contribution you enter. It's important to note that all contributions will be effectively anonymous, in that we don't want anyone to find out who entered a contribution. You login using SSO with Active Directory, and your User Id in the Contribution database is made from an encrypted hash of your Active Directory Id. The only reason why we store this in the database is so that you can view, edit and delete your own Contributions. No personal information is stored in the database other than the encrypted User Id, Zühlke office, and the content of your contributions.

            We will generate statistics and visualisations from the collected Contributions, and you will also be able to search (by text or tag) and view anonymously Contributions entered by other colleagues - hopefully this will inspire you with new ideas!

            We may collect browser and visit data using web analysis tools - this will be used by Zühlke purely for the purpose of improving this application, and will not be shared outside the company.
        </Typography>

        <Typography variant="h4">
            Consent
        </Typography>

        <Typography variant="body2">
            By entering one or more Contributions into this tool you agree that your data can be used for the purposes described above. You can withdraw your consent at any time by deleting all your contributions. This option is always available to you on this page.
        </Typography>
        <a href="">Delete all my contributions</a>


    </MainCard>
);

export default SamplePage;
