import pickle
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
def ranking(document):
    dbfile = open('matrix.pkl', 'rb')
    tfidf_matrix=pickle.load(dbfile)
    dbfile = open('similarity.pkl', 'rb')
    similar=pickle.load(dbfile)
   
    

    val=similar.transform([document])
    cosine_sim=cosine_similarity(val,tfidf_matrix)
    result=np.argsort(cosine_sim[0])[::-1][1:11]
    data=pd.read_csv('output.csv')
    files=data.loc[result, 'Filename']
    result=[]
    for file in files:
        with open(f'Prior_Cases/{file}','r') as f:
            content=f.read()
            result.append(content)
    return result
