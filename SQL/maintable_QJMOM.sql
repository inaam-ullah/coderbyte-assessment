SELECT 
    m.GroupID,
    m.FirstName,
    m.LastName,
    m.Job,
    m.ExternalID,
    vi.CompanyName,
    COUNT(m.FirstName) AS `COUNT`
FROM 
    maintable_QJMOM m
JOIN 
    cb_vendorinformation vi ON m.GroupID = vi.GroupID
GROUP BY
    m.FirstName
ORDER BY 
    COUNT(m.FirstName) ASC, vi.CompanyName ASC;