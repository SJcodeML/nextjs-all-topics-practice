export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-26'

export const dataset = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
 "sq4earib",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(  
  'skxxvcCqXgiclrbs6YcQzKFJ7Yp5C8xp8pY697SuEE8vLl6DlXBmB2VwwDIc4VFOXMnbr6tyFYSTVWsVEmjc3E4tobiXJflhJowMSVbstTAXLqeDgFLWmbHQLN0qpc7qD0GQLkddo17uyf4Q2eMueYULVTOaPaFi6sIwEc5vzt6olbC3F3tn',  
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'  
);  


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
