import { Box, Typography } from "@mui/material";

const TransactionList = ({ title, transactions, colors }) => (
    <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
        <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                {title}
            </Typography>
        </Box>
        {transactions.map((transaction, i) => (
            <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                    {transaction.txId}
                </Typography>
                <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                    ${transaction.cost}
                </Box>
            </Box>
        ))}
    </Box>
);

export default TransactionList;
