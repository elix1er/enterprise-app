import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { QUERY_KEY } from 'queries';
import { fetchCW721ContractInfo } from './fetchCW721ContractInfo';
import { useLCDClient } from '@terra-money/wallet-provider';

export const useCW721ContractInfoQuery = (
  nftAddress: string,
  options: Partial<Pick<UseQueryOptions, 'enabled'>> = { enabled: true }
): UseQueryResult<Awaited<ReturnType<typeof fetchCW721ContractInfo>>> => {
  const lcd = useLCDClient();

  return useQuery([QUERY_KEY.CW721_CONTRACT_INFO, nftAddress], () => fetchCW721ContractInfo(lcd, nftAddress), {
    refetchOnMount: false,
    ...options,
  });
};
