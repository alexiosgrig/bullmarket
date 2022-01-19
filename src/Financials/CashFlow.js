import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
import { checkNumbers } from "./BalanceSheet";
import { divider } from "./BalanceSheet";
export const CashFlow = () => {
  const [context, setContext] = useContext(Context);
  const [dataInfo, setDataInfo] = useState({
    date: [],
    netIncome: [],
    netincomeloss: [],
    depreciationAndAmortization: [],
    deferredIncomeTax: [],
    stockBasedCompensation: [],
    changeInWorkingCapital: [],
    accountsReceivables: [],
    inventory: [],
    accountsPayables: [],
    otherWorkingCapital: [],
    otherNonCashItems: [],
    netCashProvidedByOperatingActivities: [],
    investmentsInPropertyPlantAndEquipment: [],
    acquisitionsNet: [],
    purchasesOfInvestments: [],
    salesMaturitiesOfInvestments: [],
    otherInvestingActivites: [],
    netCashUsedForInvestingActivites: [],
    debtRepayment: [],
    commonStockIssued: [],
    commonStockRepurchased: [],
    dividendsPaid: [],
    otherFinancingActivites: [],
    netCashUsedProvidedByFinancingActivities: [],
    effectOfForexChangesOnCash: [],
    netChangeInCash: [],
    cashAtEndOfPeriod: [],
    cashAtBeginningOfPeriod: [],
    operatingCashFlow: [],
    capitalExpenditure: [],
    freeCashFlow: [],
  });

  async function fetchIncomeStatement() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${context}?limit=120&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    setDataInfo({
      date: data.map((element) => checkNumbers(element.date)).slice(0, 4),
      netIncome: data
        .map((element) => checkNumbers(element.netIncome, divider))
        .slice(0, 4),
      netincomeloss: data
        .map((element) => checkNumbers(element.netincomeloss, divider))
        .slice(0, 4),
      depreciationAndAmortization: data
        .map((element) =>
          checkNumbers(element.depreciationAndAmortization, divider)
        )
        .slice(0, 4),
      deferredIncomeTax: data
        .map((element) => checkNumbers(element.deferredIncomeTax, divider))
        .slice(0, 4),
      stockBasedCompensation: data
        .map((element) => checkNumbers(element.stockBasedCompensation, divider))
        .slice(0, 4),
      changeInWorkingCapital: data
        .map((element) => checkNumbers(element.changeInWorkingCapital, divider))
        .slice(0, 4),
      accountsReceivables: data
        .map((element) => checkNumbers(element.accountsReceivables, divider))
        .slice(0, 4),
      inventory: data
        .map((element) => checkNumbers(element.inventory, divider))
        .slice(0, 4),
      accountsPayables: data
        .map((element) => checkNumbers(element.accountsPayables, divider))
        .slice(0, 4),
      otherWorkingCapital: data
        .map((element) => checkNumbers(element.otherWorkingCapital, divider))
        .slice(0, 4),
      otherNonCashItems: data
        .map((element) => checkNumbers(element.otherNonCashItems, divider))
        .slice(0, 4),
      netCashProvidedByOperatingActivities: data
        .map((element) =>
          checkNumbers(element.netCashProvidedByOperatingActivities, divider)
        )
        .slice(0, 4),
      investmentsInPropertyPlantAndEquipment: data
        .map((element) =>
          checkNumbers(element.investmentsInPropertyPlantAndEquipment, divider)
        )
        .slice(0, 4),
      acquisitionsNet: data
        .map((element) => checkNumbers(element.acquisitionsNet, divider))
        .slice(0, 4),
      purchasesOfInvestments: data
        .map((element) => checkNumbers(element.purchasesOfInvestments, divider))
        .slice(0, 4),
      salesMaturitiesOfInvestments: data
        .map((element) =>
          checkNumbers(element.salesMaturitiesOfInvestments, divider)
        )
        .slice(0, 4),
      otherInvestingActivites: data
        .map((element) =>
          checkNumbers(element.otherInvestingActivites, divider)
        )
        .slice(0, 4),
      netCashUsedForInvestingActivites: data
        .map((element) =>
          checkNumbers(element.netCashUsedForInvestingActivites, divider)
        )
        .slice(0, 4),
      debtRepayment: data
        .map((element) => checkNumbers(element.debtRepayment, divider))
        .slice(0, 4),
      commonStockIssued: data
        .map((element) => checkNumbers(element.commonStockIssued, divider))
        .slice(0, 4),
      commonStockRepurchased: data
        .map((element) => checkNumbers(element.commonStockRepurchased, divider))
        .slice(0, 4),
      dividendsPaid: data
        .map((element) => checkNumbers(element.dividendsPaid, divider))
        .slice(0, 4),
      otherFinancingActivites: data
        .map((element) =>
          checkNumbers(element.otherFinancingActivites, divider)
        )
        .slice(0, 4),
      netCashUsedProvidedByFinancingActivities: data
        .map((element) =>
          checkNumbers(
            element.netCashUsedProvidedByFinancingActivities,
            divider
          )
        )
        .slice(0, 4),
      effectOfForexChangesOnCash: data
        .map((element) =>
          checkNumbers(element.effectOfForexChangesOnCash, divider)
        )
        .slice(0, 4),
      netChangeInCash: data
        .map((element) => checkNumbers(element.netChangeInCash, divider))
        .slice(0, 4),
      cashAtEndOfPeriod: data
        .map((element) => checkNumbers(element.cashAtEndOfPeriod, divider))
        .slice(0, 4),
      cashAtBeginningOfPeriod: data
        .map((element) =>
          checkNumbers(element.cashAtBeginningOfPeriod, divider)
        )
        .slice(0, 4),
      operatingCashFlow: data
        .map((element) => checkNumbers(element.operatingCashFlow, divider))
        .slice(0, 4),
      capitalExpenditure: data
        .map((element) => checkNumbers(element.capitalExpenditure, divider))
        .slice(0, 4),
      freeCashFlow: data
        .map((element) => checkNumbers(element.freeCashFlow, divider))
        .slice(0, 4),
    });
  }
  useEffect(() => {
    fetchIncomeStatement();
  }, [context]);
  return (
    <div>
      <h1> Income Statement</h1>
      <h6> Numbers to Millions</h6>
      <table>
        <tbody>
          <tr>
            <th>About</th>
            {dataInfo.date.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          <tr>
            <td> Net Income</td>
            {dataInfo.netIncome.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Depreciation and Amortization</td>
            {dataInfo.depreciationAndAmortization.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Deferred Income Tax</td>
            {dataInfo.deferredIncomeTax.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Stock Based Compensation</td>
            {dataInfo.stockBasedCompensation.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Change In Working Capital</td>
            {dataInfo.changeInWorkingCapital.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Receivables</td>
            {dataInfo.accountsReceivables.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Inventory</td>
            {dataInfo.inventory.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Payables</td>
            {dataInfo.accountsPayables.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Working Capital</td>
            {dataInfo.otherWorkingCapital.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Non-Cash Items</td>
            {dataInfo.otherNonCashItems.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Provided By Operating Activities</td>
            {dataInfo.netCashProvidedByOperatingActivities.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Investments In Property Plant And Equipment</td>
            {dataInfo.investmentsInPropertyPlantAndEquipment.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Acquisitions Net</td>
            {dataInfo.acquisitionsNet.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Purchases Of Investments</td>
            {dataInfo.purchasesOfInvestments.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Sales Maturities Of Investments</td>
            {dataInfo.salesMaturitiesOfInvestments.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Investing Activites</td>
            {dataInfo.otherInvestingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used For Investing Activites</td>
            {dataInfo.netCashUsedForInvestingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Debt Repayment</td>
            {dataInfo.debtRepayment.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Issued</td>
            {dataInfo.commonStockIssued.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Repurchased</td>
            {dataInfo.commonStockRepurchased.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Dividends Paid</td>
            {dataInfo.dividendsPaid.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Financing Activites</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used Provided By Financing Activities</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Effect Of Forex Changes On Cash</td>
            {dataInfo.effectOfForexChangesOnCash.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Change In Cash</td>
            {dataInfo.netChangeInCash.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At End Of Period</td>
            {dataInfo.cashAtEndOfPeriod.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At Beginning Of Period</td>
            {dataInfo.cashAtBeginningOfPeriod.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Operating Cash Flow</td>
            {dataInfo.operatingCashFlow.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Capital Expenditure</td>
            {dataInfo.capitalExpenditure.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Free Cash Flow</td>
            {dataInfo.freeCashFlow.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
