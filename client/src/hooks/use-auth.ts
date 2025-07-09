"use client";

import { getUserSessionQueryFn } from "@/lib/api/auth.apis";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const query = useQuery({
    queryKey: ["authUser"],
    queryFn: getUserSessionQueryFn,
    staleTime: Infinity,
  });
  return query;
};

export default useAuth;
