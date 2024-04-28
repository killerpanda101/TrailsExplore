import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ChartBox from "../../components/ChartBox";
import TransactionList from "../../components/TransactionList";

const Sponsor = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="National Cancer Institute NCI" subtitle="13,439 trials" />
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                <ChartBox title="13,439 trials by start date" subtitle="National Cancer Institute NCI" ChartComponent={LineChart} colors={colors} />
                <ChartBox title="13,439 trials by phase" subtitle="National Cancer Institute NCI" ChartComponent={BarChart} colors={colors} />
                <TransactionList title="Drugs" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Targets" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Collaborators" transactions={mockTransactions} colors={colors} />
            </Box>
        </Box>
    );
};

export default Sponsor;
