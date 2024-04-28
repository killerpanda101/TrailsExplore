import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ChartBox from "../../components/ChartBox";
import TransactionList from "../../components/TransactionList";

const Disease = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Breast Neoplasms" subtitle="10,667 trials" />
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                <ChartBox title="10,667 Trials by start date" subtitle="Breast Neoplasms" ChartComponent={LineChart} colors={colors} />
                <ChartBox title="10,667 Trials by phase" subtitle="Breast Neoplasms" ChartComponent={BarChart} colors={colors} />
                <TransactionList title="Drugs" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Targets" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Sponsors" transactions={mockTransactions} colors={colors} />
            </Box>
        </Box>
    );
};

export default Disease;
