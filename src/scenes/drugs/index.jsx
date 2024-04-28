import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ChartBox from "../../components/ChartBox";
import TransactionList from "../../components/TransactionList";

const Drugs = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Cyclophosphamide" subtitle="895 trials" />
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                <ChartBox title="895 Trials by start date" subtitle="Cyclophosphamide" ChartComponent={LineChart} colors={colors} />
                <ChartBox title="895 Trials by phase" subtitle="Cyclophosphamide" ChartComponent={BarChart} colors={colors} />
                <TransactionList title="Diseases" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Targets" transactions={mockTransactions} colors={colors} />
                <TransactionList title="Sponsors" transactions={mockTransactions} colors={colors} />
            </Box>
        </Box>
    );
};

export default Drugs;
