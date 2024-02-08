'use client';
import { ApolloProvider } from '@apollo/client';

     import client from "@/core/database/ApolloClient"

export default function ApolloWrapper({ children }: any) {
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
