export const useApi: typeof useFetch = (request, options = {}) => {
  const config = useRuntimeConfig()

  options.baseURL = config.public.baseUrl
  return useFetch(request, options)
}
